import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./allCharts.css"
// const options = {
//   title: {
//     text: "My chart",
//   },
//   series: [
//     {
//       data: [1, 2, 3],
//     },
//   ],
// };

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function AllCharts({ isSidebarOpen }) {
  const classes = useStyles();
  const [option, setOption] = useState({
    title: { text: "Custom Chart" },
    subtitle: { text: "Create your Custom Chart" },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title" || name ==="subtitle")
      setOption({
        ...option,
        [name]: { text: value },
      });
  };

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: isSidebarOpen,
      })}
    >
      <div className={classes.drawerHeader} />
      <h1>Custom Chart</h1>

      <div className="options-controllers-container">
        <div className="option-controller">
          <label>Chart Title</label>
          <input
            type="text"
            placeholder="Enter the title for Chart"
            onChange={(e) => handleChange(e)}
            name="title"
            value={option.title.text}
          />
        </div>
        <div className="option-controller">
          <label>Chart Subtitle</label>
          <input
            type="text"
            placeholder="Enter the subtitle for Chart"
            onChange={(e) => handleChange(e)}
            name="subtitle"
            value={option.subtitle.text}
          />
        </div>
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={option} />
      </div>
    </main>
  );
}
