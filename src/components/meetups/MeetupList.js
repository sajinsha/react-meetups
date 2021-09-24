import MeetupItem from './MeetupItem';
import classes from  './MeetupItemList.module.css';

function MeetupList(props) {
    return (
    <ul className={classes.list}>
        {props.meetups.map(meetup => (
        <MeetupItem 
        key={meetup.key}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
            /> 
        ))}
    </ul>


        )
}
export default MeetupList;