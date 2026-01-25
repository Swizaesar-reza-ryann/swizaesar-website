# Analytics Events Tracking

This document outlines all the analytics events tracked in the Swizaesar website, specifically for the Memory Card Game.

## Memory Card Game Events

### Game Interaction Events

#### 1. Game Start

- **Event Name**: `game_start`
- **Category**: `games`
- **Label**: `memory_card_level_{level}`
- **Value**: Current level number

**Triggered when**: User clicks the "Start Game" button

**Example**:

```javascript
{
  action: 'game_start',
  category: 'games',
  label: 'memory_card_level_1',
  value: 1
}
```

#### 2. Next Level

- **Event Name**: `next_level`
- **Category**: `games`
- **Label**: `memory_card_level_{level}_completed`
- **Value**: Current level number

**Triggered when**: User clicks the "Next Level" button after completing a level

**Example**:

```javascript
{
  action: 'next_level',
  category: 'games',
  label: 'memory_card_level_1_completed',
  value: 1
}
```

#### 3. Level Completed

- **Event Name**: `level_completed`
- **Category**: `games`
- **Label**: `level_{level}_moves_{moves}`
- **Value**: Number of moves taken

**Triggered when**: User completes a level (automatically tracked with next_level)

**Example**:

```javascript
{
  action: 'level_completed',
  category: 'games',
  label: 'level_1_moves_15',
  value: 15
}
```

#### 4. Game Win

- **Event Name**: `game_win`
- **Category**: `games`
- **Label**: `level_{level}_completed`
- **Value**: Number of moves taken

**Triggered when**: User successfully completes a level

**Example**:

```javascript
{
  action: 'game_win',
  category: 'games',
  label: 'level_1_completed',
  value: 15
}
```

#### 5. Game Reset

- **Event Name**: `game_reset`
- **Category**: `games`
- **Label**: `memory_card_level_{level}`
- **Value**: Current level number

**Triggered when**: User clicks "Reset Game" or "Play Again" buttons

**Example**:

```javascript
{
  action: 'game_reset',
  category: 'games',
  label: 'memory_card_level_1',
  value: 1
}
```

### Additional Available Events (Not Currently Implemented)

#### 6. Card Click

- **Event Name**: `card_click`
- **Category**: `games`
- **Label**: `level_{level}_move_{totalMoves}`
- **Value**: Total move count

**Can be triggered when**: User clicks a card during gameplay

#### 7. Game Completion Time

- **Event Name**: `game_completion_time`
- **Category**: `games`
- **Label**: `level_{level}_time`
- **Value**: Time in seconds

**Can be triggered when**: User completes a level (tracks time spent)

## Implementation Details

### Environment

- **Production Only**: Events are only tracked in production environment
- **Google Analytics**: Uses Google Analytics 4 (GA4) with gtag
- **Tracking ID**: Configured via `NEXT_PUBLIC_GA_TRACKING_ID` environment variable

### Hook Usage

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

const { trackGameStart, trackNextLevel, trackGameReset, trackGameWin } =
  useAnalytics();
```

### Data Structure

All events follow GA4 recommended event structure:

- **action**: The specific action that occurred
- **category**: The category of the event (games)
- **label**: Descriptive label for the event
- **value**: Numeric value associated with the event

## Privacy Considerations

- No personal information is collected
- Only game interaction data is tracked
- Events are only fired in production environment
- Users can opt-out via browser settings or ad blockers

## Future Enhancements

1. **Session Tracking**: Track total time spent in game session
2. **Difficulty Analysis**: Track performance across different levels
3. **User Flow**: Track how users navigate through game levels
4. **Error Tracking**: Track any game errors or issues
5. **Device Analysis**: Track performance across different devices
