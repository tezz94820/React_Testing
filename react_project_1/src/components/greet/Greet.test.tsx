import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => { // you can write skip and only with describe . and you can nest describe blocks in one another. you can write multiple describe in one file.
    test('greetings displayed properly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument(); // to expect the text in the documetn or displayed screen.
    })
    
    
    describe('TTD Greet', () => {
        //Test driven developement.
        // let us wite a test to give a name prop and display 'hello name' ok.
        test('grreting with name', () => {
            const name = 'Tejas';
            render(<Greet name={name} />)
            const textElement = screen.getByText(`Hello ${name}`);
            expect(textElement).toBeInTheDocument();
        })
})

})


// if you want to run only that very specific test use the following command: test.only()
// if you want to skip that specific test use the following command: test.skip()

