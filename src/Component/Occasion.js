export default function Occasion({value, onChange}){
    const options = [
        {id:0, value:''},
        {id:1, value:'Anniversary'},
        {id:2, value:'Birthday'},
        {id:3, value:"Father's Day"},
        {id:4, value:"Mother's Day"}      
    ];
    return(
        <div className="form-group">
            <label htmlFor="occasion" className="fw-bold">Occasion</label>
            <select id="occasion" name="occasion" className="form-control" value={value} onChange={onChange}>
                {options.map(option=>(<option key={option.id} value={option.value}>{option.value}</option>))}       
            </select>
        </div>
    );


}