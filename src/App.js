import './App.css';
import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import ResponsiveSidebar from './components/Sidebar/ResponsiveSidebar';

import Home from "./pages/home/Home"
import SimpleChart from "./pages/simpleChart/SimpleChart"
import AllCharts from './pages/allCharts/AllCharts';

import {withRouter} from 'react-router-dom'

function App(props) {
  // console.log(props)
  let routes = (
    <HashRouter>

      <Switch>
        <Route exact path="/" render={(props) => <ResponsiveSidebar Main={Home} props={props} />} />
        <Route path="/simple-chart" render={(props) => <ResponsiveSidebar Main = {SimpleChart} props = {props} />} />
        <Route path="/all-charts" render={(props) => <ResponsiveSidebar Main = {AllCharts} props = {props} />} />

      </Switch>
    </HashRouter>)
  return <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>;
}

export default withRouter(App);
