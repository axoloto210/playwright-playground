'use client'

import { useState } from 'react'

export default function Home() {
    const [count, setCount] = useState(0)
    return (
        <main>
            <h1>heading 1</h1>
            <p>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    plus 1
                </button>
            </p>
            <p>{count}</p>
        </main>
    )
}
