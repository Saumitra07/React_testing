import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting'

describe('Greeting component',()=>{

    test('renders hello world',()=>{
        render(<Greeting/>);
        
        const text=screen.getByText('Hello world');
        expect(text).toBeInTheDocument();      
        });

    test('button click',()=>{
        render(<Greeting/>);
        const text=screen.getByText('Its good to see',{exact:false});

        expect(text).toBeInTheDocument();
        
    })


    test("check if button is clicked",()=>{
        

        //Arrange

        render(<Greeting/>)

        //Act

        const element=screen.getByRole('button');

        userEvent.click(element);


        //Asert

        const text=screen.getByText('Changed');
        expect(text).toBeInTheDocument();

    });



    test('check if greeting is gone after click',()=>{

        render(<Greeting/>)

        //Act

        const element=screen.getByRole('button');

        userEvent.click(element);


        //Asert

        const text=screen.queryByText('Its good to see',{exact:false});
        expect(text).toBeNull();


    })
})

