import React from 'react';

function Box ({
    id,
    handleRemove,
    width = 4,
    height = 4,
    backgroundColor = 'purple'
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
                style={{
                    width: `${width}em`,
                    height: `${height}em`,
                    backgroundColor
                }}
            />
            <button onClick={remove}>X</button>
        </div>
    );
}

export default Box;