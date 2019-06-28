import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const activites=[{
	title:"Title, Company",
	subtitle:"subtitle",
	description:" Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Loremest."
}];

const Activity=({title,subtitle,description})=>(
	<TimelineItem key="001" dateText="11/2010 – Present" style={{ color: '#e86971' }}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<p>
				{description}
			</p>
		</TimelineItem>
)

const ActivityTimeline = props => (
	<Timeline lineColor={'#ddd'}>
		{
			activites.map((activity,index)=>(
				<Activity title={activity.title} subtitle={activity.subtitle} description={activity.description} />
			))
		}
	</Timeline>
);

export default ActivityTimeline;
