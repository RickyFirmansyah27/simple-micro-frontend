import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Tabs.css';

const Tabs = (props) => {
  const { tabs, onSelect } = props;
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    onSelect(tabKey);
  };

  useEffect(() => {
    onSelect(activeTab);
  }, [onSelect, activeTab]);

  return (
    <div className={classes.tabContainer}>
      <ul className={classes.tabList}>
        {Object.keys(tabs).map((tabKey) => (
          <li
            key={tabKey}
            onClick={() => handleTabClick(tabKey)}
            className={`${classes.tabItem} ${
              tabKey === activeTab ? classes.tabItemActive : classes.tabItemInactive
            }`}
          >
            {tabs[tabKey].text}
          </li>
        ))}
      </ul>
    </div>
  );
};

Tabs.defaultProps = {
  tabs: {},
  onSelect: () => {},
};

Tabs.propTypes = {
  tabs: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Tabs;
