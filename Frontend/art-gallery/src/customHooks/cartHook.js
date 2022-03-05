function cartHook() {
    function add (paintingId) {
        try {
            const paintingString = localStorage.getItem('paintings');
            let newPaintingString = '';
            if (paintingString === null) {
                localStorage.setItem('paintings', paintingId);
                return
            }
            const paintingArr = paintingString.split(" ");
            if (paintingArr.includes(paintingId)) {
                return
            }  else {
                newPaintingString = `${paintingString} ${paintingId}`;
            }
            localStorage.setItem('paintings', newPaintingString);
        } catch (err) {
            console.log(err);
            return err
        }
    };

    function getAll() {
        try {
            const paintingString = localStorage.getItem('paintings');
            const paintingArr = paintingString.split(" ");
            console.log(paintingArr)
            return paintingArr
        } catch (err) {
            console.log(err);
            return err
        }
    };

    function remove(paintingId) {
        try {
            const paintingString = localStorage.getItem('paintings');
            let paintingArr = paintingString.split(" ");
            for (let i=0; i < paintingArr.length; i++) {
                if (paintingArr[i] == paintingId) {
                    paintingArr.splice(i, 1);
                }
            };
            const newPaintingString = paintingArr.join(" ");
            localStorage.setItem('paintings', newPaintingString);
            return newPaintingString
        } catch (err) {
            console.log(err);
            return err
        }
    };

    const hooks = {
        add,
        getAll,
        remove
    }
    return hooks
};


export default cartHook;