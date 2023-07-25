export default function AvailableTimes({availableTime, TimeValueOnChange,onBlur}){
    return(   
        <div>   
            <label htmlFor="res-time" className="fw-bold">Choose time</label>
            <select id="res-time"  name="restime" className="form-control"   onChange={TimeValueOnChange} onBlur={onBlur}>
                {availableTime.map((option)=>(<option key={option.id} value={option.value}>{option.value}</option>))}
            </select>
        </div>  
    );
}