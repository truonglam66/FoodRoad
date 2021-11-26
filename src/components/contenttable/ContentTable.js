import React from 'react';
import './ContentTable.css'
import { FaBiking, FaSmile, FaHandshake, FaUtensils } from "react-icons/fa";

function ContentTable({ items }) {
    return (
        <div>
            <table className='content-table'>
                <tr>
                    <th>
                        <FaBiking className='icon' />
                        <div className="mission">
                            To take you on the back of the bikes and give you the safest experience. We guarantee to keep you safe and sound the whole tour with our skillful and experienced drivers.
                        </div>
                    </th>
                    <th>
                        <FaSmile className='icon' />
                        <div className="mission">
                            To get you a personal English speaking guide, who was well trained and selected by many criterias. The tour will be filled with our friendly, knowledgable and funny staffs.
                        </div>
                    </th>
                    <th>
                        <FaHandshake className='icon' />
                        <div className="mission">
                            To deliver our great qualities along with our outstanding service to all the customers that other business provided.
                        </div>
                    </th>
                    <th>
                        <FaUtensils className='icon' />
                        <div className="mission">
                            To fulfill our customer stomach with a unique authentic local taste and understanding of Saigon cuisine and its customs. Starve yourself before the tour!
                        </div>
                    </th>
                </tr>
                <tr>
                    <td rowSpan="3">
                        <div className='title'>
                        MEET OUR BOARD OF MANAGEMENT
                        </div>
                    </td>
                    <td >
                        <img src="https://media.istockphoto.com/photos/portrait-of-handsome-young-taiwanese-man-picture-id1168469141?b=1&k=20&m=1168469141&s=170667a&w=0&h=i-piiDeH2QGvwYFDHmy4dD6oIy-BlaS8XxVw__67C2Y=" alt='CEO_image' className='manager-img content' />
                    </td>
                    <td colSpan='2'>
                        <div className='content'>
                            <h3 className='about-h3'>DENT TRAN</h3>
                            <h4 className='about-h4'> Founder & Managing Director</h4>
                            <p className="pcontent">Xin Chào, I am from the Mekong Delta. Saigon Food Tour is one of my main goals to promote responsible tourism in Vietnam. I wish to create tours that would benefit those who are the poorest in Vietnam and leave as little environmental footprint as possible. I also want to give visitors a wonderful experience and promote the treasure of Vietnamese food & cultures.</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="https://media.istockphoto.com/photos/attractive-senior-chinese-woman-smiling-picture-id1156954211?b=1&k=20&m=1156954211&s=170667a&w=0&h=4ajJasG9nC5JwjZv2NCVjNYL2cvztqtuhI_CRr5_3f8=" alt='CEO_image' className='manager-img content' />
                    </td>
                    <td colSpan='2'>
                        <div className='content'>
                            <h3 className='about-h3'>NANCY LE</h3>
                            <h4 className='about-h4'>Co-founder</h4>
                            <p className="pcontent">Nancy was born in Mekong Delta, but her family is originated from Hue - the central of Vietnam. She can cook more than 40 Vietnamese dishes, especially Hue dishes. She loves cooking and loves to create new dishes. She is not only a great cook, but also a good clothes desinger. She is the co-founder of Saigon Food Tour, side by side with Dent Tran to manage their little passion.</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=" alt='CEO_image' className='manager-img content' />
                    </td>
                    <td colSpan='2'>
                        <div className='content'>
                            <h3 className='about-h3'>TB Xuan Thinh</h3>
                            <h4 className='about-h4'>Tour Operation</h4>
                            <p className="pcontent">TB has joined the tour guide team for 1 year and a half and he quickly got into the company, where he is the Saigon Food Tour Operator at the moment. Most of the bookings and serving requests have been done by him with his wonderful skills and sensational abilities. So don't hesitate to ask him for any assisstance as he will give you his best shot on advice.</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <img src="https://media.istockphoto.com/photos/portrait-business-woman-asian-on-blue-background-picture-id1166423321?b=1&k=20&m=1166423321&s=170667a&w=0&h=t_8rDWb5-uWQwOvJ2qKnhb4lr4NlEoUy8_7jH1atWHo=" alt='CEO_image' className='manager-img content' />
                    </td>
                    <td colSpan='2'>
                        <div className='content'>
                            <h3 className='about-h3'>Khanh Ha Dinh T.</h3>
                            <h4 className='about-h4'>Sales Executive</h4>
                            <p className="pcontent">Ha is a dynamic and motivated individual with professional manners. She experienced working as a tour guide for more than two years, from which she developed her great knowledge in all of company's products. Having exposed to different tours, she strives to contribute her knowledge and passion to each and every booking/request. Please feel free to contact Ha for the best deal! </p>
                        </div>
                    </td>
                </tr>
            </table>

            <table className='content-table'>
                <tr>
                    <td>
                        <div className='title'>
                        MEET OUR OUTSTANDING TOUR GUIDES
                        </div>
                    </td>
                    <td className="guides">
                    <div className="rectagle">
                        </div>
                        <div className="guidinfo">
                            <img src="https://images.unsplash.com/photo-1526837967000-9a10c58024ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZXRuYW0lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='CEO_image' className='tourguid-img content' />
                            <span className="name">Quynh Anh</span>
                        </div>
                        <div className="guidinfo">
                            <img src="https://images.unsplash.com/photo-1541746714029-de3c45147f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlldG5hbSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='CEO_image' className='tourguid-img content' />
                            <span className="name">Ngoc Thinh</span>
                        </div>
                        <div className="guidinfo">
                            <img src="https://images.unsplash.com/photo-1494765803320-93c95366f4b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='CEO_image' className='tourguid-img content' />
                            <span className="name">Kim Thoa</span>
                        </div>
                        <div className="guidinfo" style={{paddingLeft:"190px"}}>
                            <img src="https://media.istockphoto.com/photos/joyful-student-picture-id640933526?b=1&k=20&m=640933526&s=170667a&w=0&h=G79qcdyXtdIrL2sdIgAqVMmtXGJtMztMAiM55auItMs=" alt='CEO_image' className='tourguid-img content' />
                            <span className="name">Phu Bao</span>
                        </div>
                        <div className="guidinfo">
                            <img src="https://images.unsplash.com/photo-1493548453442-81b439b46178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZXRuYW0lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='CEO_image' className='tourguid-img content' />
                            <span className="name">Lily</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ContentTable;