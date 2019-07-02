import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import moment from 'moment';

const Activity = ({ title, subtitle, description }) => (
	<TimelineItem key="001" dateText={subtitle} style={{ color: '#e86971' }}>
		<h4>{title}</h4>
		<p>{description}</p>
	</TimelineItem>
);

const ActivityTimeline = props => {
	console.log(props);
	return (
		<Timeline lineColor={'#ddd'}>
			{props.logs.map((activity, index) => {
				if (activity) {
					let { startDate, endDate } = activity;
					let start = moment(startDate).format('MMMM Do YYYY');
					let end = moment(endDate).format('MMMM Do YYYY');
					let subtitle = 'From ' + start + ' to ' + end;
					return (
						<Activity
							key={index}
							title={activity.title}
							subtitle={subtitle}
							description={activity.description}
						/>
					);
				}
			})}
		</Timeline>
	);
};

export default ActivityTimeline;
