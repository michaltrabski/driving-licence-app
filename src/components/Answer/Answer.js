import React from 'react';

const Answer = ({ question, rightanswer, show }) => {

    const yesno = () => {
        return (
            <div>
                <button className={calculateClasses('t')}>Tak</button>
                <button className={calculateClasses('n')}>Nie</button>
            </div>
        )
    }

    const abc = () => {
        return (
            <div>
                <button className={calculateClasses('a')}><strong>A.</strong> {question.a}</button>
                <button className={calculateClasses('b')}><strong>B.</strong> {question.b}</button>
                <button className={calculateClasses('c')}><strong>C.</strong> {question.c}</button>
            </div>
        )
    }

    const calculateClasses = (letter) => {
        let classList = 'btn m-2 ';

        if (show) {
            if (rightanswer === letter) {
                classList += 'btn-success';
            } else {
                classList += 'btn-light';
            }
        } else {
            classList += 'btn-light';
        }

        if (letter !== 't' && letter !== 'n') classList += ' btn-block text-left';
        return classList;
    }
    // "btn btn-success m-2 btn-block text-left"


    const insertAnswer = () => {
        if (rightanswer === 't' || rightanswer === 'n') {
            return yesno();
        } else {
            return abc();
        }
    }

    return (
        <>
            {insertAnswer()}
            {rightanswer}
        </>
    )
};

export default Answer;