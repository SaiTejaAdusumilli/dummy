import React from 'react';
import { Interface } from 'readline';
import '../components/component.css';

import logo from '../Assets/logo.svg'
import star from '../Assets/Path 28.svg'
import arr from '../Assets/Path 20.svg'
import {Idata} from '../components/interfaces'

///////////////////////////check line 42//////////////
interface Iprops{
    data:Idata[];
    
}
/*
 {data.map((courses) =>(
        <h1>{courses.Tags[0]}</h1>
      ))}
*/
const All_courses : React.FC<Iprops> = ({ data }) => {
    
    return (
    <div className="head+course">  
        <div className="Heading">
            <h1 > <pre>All Courses </pre></h1>
            <form className="drop-down">
            <select>
            <option value="" disabled selected>Select your option</option>
            <option value="LowtoHigh">Low to High</option>
            <option value="HighoLow">High to Low</option>
            </select>
            <input type="submit" value="Apply Filter"/>
            </form>
        </div>
        <div >
            {data.map((courses) =>(
            <p className="listofcourses">
                <img src={logo} className="img-course"/>
                    <div className="name">
                        {courses.course}
                        <div className="tags">
                        
                            <span>{courses.Tags}</span>
                        </div>
                    </div>
                    <div className="author">{courses.Author}</div>
                    <div className="author"><img src={star} /></div>
                    <div className="author">{courses['Actual Price']}</div>
                    <div className="author">{courses['Discounted %age']}</div>
                    
                </p>
                )
            )}
        </div>
    </div>
    )
  }
  export default All_courses