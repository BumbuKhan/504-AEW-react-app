import React, {Component} from 'react';

class LessonsList extends Component {
    render() {
        return (
            <div>
                <div className="list-group">
                    <a href="" className="list-group-item list-group-item-action">Lesson 1
                        <span className="badge badge-primary badge-pill lessons-list__badge">12</span>
                    </a>
                    <a href="" className="list-group-item list-group-item-action">Lesson 2
                        <span className="badge badge-primary badge-pill lessons-list__badge">12</span>
                    </a>
                    <a href="" className="list-group-item list-group-item-action">Lesson 3
                        <span className="badge badge-primary badge-pill lessons-list__badge">12</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default LessonsList;