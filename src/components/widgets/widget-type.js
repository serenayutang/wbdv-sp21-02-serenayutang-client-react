import React, {useState, useEffect} from 'react'

const WidgetType = ({widget, setWidget}) => {
    return (
        <div>
            <select onChange={(e) => {
                setWidget({...widget, type: e.target.value})}}
                    value={widget.type}
                    className="form-control">
                <option value={"HEADING"}>Heading</option>
                <option value={"PARAGRAPH"}>Paragraph</option>
                <option value={"LIST"}>List</option>
                <option value={"IMAGE"}>Image</option>
            </select>
        </div>
    )
}

export default WidgetType