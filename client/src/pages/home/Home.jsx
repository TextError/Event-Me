import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update_events } from '../../redux/actions/event';

import HomeEvents from '../../components/home/home_events/Home_Events';
import Activity from '../../components/home/activity/Activity';


const Home = ({ update_events }) => {
  // Initial events update
  useEffect(() => { update_events() }, [update_events])
  
  return (
      <div className='home'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'><HomeEvents /></div>
          <div className='col-12 col-sm-4'><Activity /></div>
        </div>
      </div>
  )
}

Home.propTypes = {
  update_events: PropTypes.func.isRequired
}

export default connect(null, { update_events })(Home);