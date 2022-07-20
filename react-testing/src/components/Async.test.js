import { render } from "@testing-library/react"
import { screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Component',()=>{

    test('renders post', async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id:'p1',title:'first post'}]
        });
        render(<Async/>)
        const listElements= await screen.findAllByRole('listitem');
        expect(listElements).not.toHaveLength(0);

    })

})