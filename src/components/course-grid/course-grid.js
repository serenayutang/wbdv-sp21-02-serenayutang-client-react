import React from 'react'
import CourseCard from "../course-card/course-card";
import {Link} from "react-router-dom";


export default class CourseGrid
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return(
            <div>
                <div className="row mb-3 sticky-top bg-white py-3 justify-content-end">
                    <div className="col-sm-4 h5 d-none d-md-block">
                        Recent Documents
                    </div>
                    <div className="col-sm-4 h5 d-none d-md-block text-center">
                        Owned by me
                        <i className="fas fa-caret-down fa-lg pl-2"/>
                    </div>
                    <div className="col-sm-4 h5 text-right">
                        <i className="fas fa-folder fa-lg pr-4"/>
                        <i className="fas fa-sort-alpha-up fa-lg pr-4"/>
                        <Link to="/courses/table">
                            <i className="fas fa-list fa-lg pr-2"/>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseCard
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                            />)
                    }
                </div>
            </div>
        )
    }
}