import React, {useState} from "react";

export const Test: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default Test;