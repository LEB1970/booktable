import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookingForm from './Component/BookingForm'
import  * as main from './Component/Main'

test('Renders the BookingForm heading', () => {
    const initializeTimesState = [
    {id:0, value: '-- Select a time --'},
    {id:1, value:'17:00'},
    {id:2, value:'18:00'},
    {id:3, value:'19:00'},
    {id:4, value:'20:00'},
    {id:5, value:'21:00'},
    {id:6, value:'22:00'}
  ];
  render(
    <BrowserRouter>
        <BookingForm availableTime ={initializeTimesState}/>
    </BrowserRouter> 
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes',()=>{
    const initializeTimesState = [
    {id:0, value: '-- Select a time --'},
    {id:1, value:'17:00'},
    {id:2, value:'18:00'},
    {id:3, value:'19:00'},
    {id:4, value:'20:00'},
    {id:5, value:'21:00'},
    {id:6, value:'22:00'}
  ];   
  expect(main.initializeTimes());
})

test('updateTimesReducer',()=>{
  const initializeTimesState = [
  {id:0, value: '-- Select a time --'},
  {id:1, value:'17:00'},
  {id:2, value:'18:00'},
  {id:3, value:'19:00'},
  {id:4, value:'20:00'},
  {id:5, value:'21:00'},
  {id:6, value:'22:00'}
  ];   
  const action ={
    type:'date',
    payload: new Date('Fri May 05 2023 19:00:00 GMT-0500 (Central Daylight Time)')
  }
  expect(main.updateTimesReducer(initializeTimesState, action))
})