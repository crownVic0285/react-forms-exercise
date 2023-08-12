import React, {useSate} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        setBoxes(boxes => [...boxes, box]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            handleRemove={removeBox}
        />
    ));

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {boxComponents}
        </div>
    );
}

export default BoxList;