import {fireEvent, render, screen} from '@testing-library/react'
import StudentSearch from '../components/StudentSearch';

test("add a student", ()=>{
    render(<StudentSearch/>)
    fireEvent.change(screen.getByPlaceholderText("Add student"),{
        target:{value:"Sanjana"},
    })
      fireEvent.click(screen.getByText("Add"));;
      expect(screen.getByText("Sanjana")).toBeInTheDocument();
})

test("searches student on button click",()=>{
    render(<StudentSearch/>)
    fireEvent.change(screen.getByPlaceholderText("Add student"),{
        target:{value:"Anshu"},
    });

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Search"));

    expect(screen.getByText("Anshu")).toBeInTheDocument();
})