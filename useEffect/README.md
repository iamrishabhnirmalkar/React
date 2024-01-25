# useEffect()

1. # React Hook that tells React DO SOME CODE WHEN (pick one)
1. This component re-renders
1. This component mounts (mounts:add component to the DOM)
1. The state of a value

## useEffect (function, [dependencies])

1. useEffect (() => {}) // Runs after every re-render
2. useEffect (() => {}, []) // Runs only on mount
3. useEffect (() => {}, [value]) // Runs on mount + when value changes

# USES

1. Event Listeners
2. DOM manipulation
3. Subscriptions (real-time updates)
4. Fetching Data from an API
5. Clean up when a component unmounts

# There are Four Stage of React Components Phase

1. Initialliation
2. Mounting {when any state value visible on screen}
3. Updation
4. Unmounting {when any state value vanish after refresh on screen}
