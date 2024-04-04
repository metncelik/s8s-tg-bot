const handleException = (fn) => {
    try {
        return fn();
    } catch (error) {
        console.log(error);
    }
}

export {handleException};