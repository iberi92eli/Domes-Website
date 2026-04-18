import assert from 'node:assert/strict'
import test from 'node:test'
import { getSeedWriteDecision } from '../src/lib/seed'

test('getSeedWriteDecision writes seed content on first run', () => {
  const decision = getSeedWriteDecision({
    currentSeedVersion: null,
    targetSeedVersion: 'domes-seed-v5',
    allowSeedContentMigration: false,
  })

  assert.equal(decision.isFirstRun, true)
  assert.equal(decision.shouldRefreshSeededContent, false)
  assert.equal(decision.shouldWriteSeedContent, true)
})

test('getSeedWriteDecision does not refresh existing content without the migration flag', () => {
  const decision = getSeedWriteDecision({
    currentSeedVersion: 'domes-seed-v4',
    targetSeedVersion: 'domes-seed-v5',
    allowSeedContentMigration: false,
  })

  assert.equal(decision.isFirstRun, false)
  assert.equal(decision.shouldRefreshSeededContent, false)
  assert.equal(decision.shouldWriteSeedContent, false)
})

test('getSeedWriteDecision refreshes starter-managed content only when explicitly allowed', () => {
  const decision = getSeedWriteDecision({
    currentSeedVersion: 'domes-seed-v4',
    targetSeedVersion: 'domes-seed-v5',
    allowSeedContentMigration: true,
  })

  assert.equal(decision.isFirstRun, false)
  assert.equal(decision.shouldRefreshSeededContent, true)
  assert.equal(decision.shouldWriteSeedContent, true)
})
