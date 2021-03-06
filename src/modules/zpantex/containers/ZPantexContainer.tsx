import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { IZAplState } from "../../zcommon/contracts";

import {
    Actions as ZComunicacionesActions
} from '../../zcomunicaciones';

import {
    OwnProps,
    ConnectedState,
    ConnectedDispatch,
    ZPantex,
} from '../components/ZPantex';

import * as ZAplicacion from '../../zaplicacion';

const mapStateToProps = (appState: IZAplState): ConnectedState => ({
    pxAlTope:appState.zPantexModule.pxAlTope
});

const mapDispatchToProps = (dispatch: redux.Dispatch<any>): ConnectedDispatch => ({
    
});

export const ZPantexContainer: React.ComponentClass<OwnProps> =
    connect<ConnectedState, ConnectedDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(ZPantex);