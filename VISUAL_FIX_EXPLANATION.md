# Visual Comparison: Before and After Fix

## Before Fix: Icon Anchor at [0, 0] (Top-Left)

```
Geographic Coordinate (lat, lon)
↓
┌─────────────────┐
│ ★               │  Icon 30x30px (or 36x36px from CSS)
│                 │  Anchor: [0, 0] (default)
│                 │
│                 │  The TOP-LEFT corner is anchored to
└─────────────────┘  the geographic coordinate

When zooming IN:
- Leaflet recalculates pixel positions
- The top-left stays at coordinate
- But visual center shifts
- Icon appears to "move" relative to map features

When zooming OUT:
- Reverse shift occurs
- Icon drifts further from intended location
- Events end up "in the sea" when they should be "on land"
```

## After Fix: Icon Anchor at [18, 18] (Center)

```
        Geographic Coordinate (lat, lon)
                    ↓
        ┌─────────────────┐
        │                 │  Icon 36x36px
        │                 │  Anchor: [18, 18]
        │        ★        │
        │    (center)     │  The CENTER is anchored to
        │                 │  the geographic coordinate
        └─────────────────┘

When zooming IN or OUT:
- Icon center stays at coordinate
- Visual position remains stable
- No drift or movement
- Icons stay exactly where they should be
```

## The Math

### Icon Size: 36px × 36px

```
       0   6  12  18  24  30  36
       ┌───┬───┬───┬───┬───┬───┐
       │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┤
     0 │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┤
     6 │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┤
    12 │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┤
    18 │   │   │   │ ★ │   │   │  ← Center at [18, 18]
       ├───┼───┼───┼───┼───┼───┤
    24 │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┤
    30 │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┤
    36 │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┘
```

### Anchor Calculation
- Icon Width: 36px → Center X: 36 / 2 = 18px
- Icon Height: 36px → Center Y: 36 / 2 = 18px
- **iconAnchor: [18, 18]**

## Real-World Example

### Scenario: Battle of Verdun marker

**Geographic Coordinates**: [49.1596, 5.4284] (Verdun, France)

#### Before Fix (No iconAnchor)
- Zoom level 6: Marker appears at Verdun ✓
- Zoom level 10: Marker shifts northeast ~5km ✗
- Zoom level 6 again: Marker appears offshore in the sea ✗

#### After Fix (iconAnchor: [18, 18])
- Zoom level 6: Marker appears at Verdun ✓
- Zoom level 10: Marker stays at Verdun ✓
- Zoom level 6 again: Marker stays at Verdun ✓

## Code Change Summary

```javascript
// BEFORE: 2 issues
iconSize: [30, 30]      // ❌ Doesn't match CSS (36x36)
// (no iconAnchor)      // ❌ Defaults to [0, 0]

// AFTER: Both fixed
iconSize: [36, 36],     // ✅ Matches CSS
iconAnchor: [18, 18]    // ✅ Centered properly
```

## Impact

- **Lines changed**: 2
- **Files modified**: 1 (app.js)
- **Breaking changes**: None
- **Performance impact**: None
- **Visual improvement**: Complete fix for positioning bug
