import React from 'react';

const Answer = (props) => {

    const { r } = props.question;
    alert(r)
    return (
        <>
            {/* {
                rightanswer.toLowerCase() === 't' ? (
                    <>
                        <button className="btn btn-success m-2">Tak</button>
                        <button className="btn btn-light m-2">Nie</button>
                    </>
                ) : (
                        <>
                            <button className="btn btn-light m-2">Tak</button>
                            <button className="btn btn-success m-2">Nie</button>
                        </>
                    )
            }
            {rightanswer} */}
        </>

    )
};

export default Answer;