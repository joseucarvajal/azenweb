import * as ZUtils from '../zutils';
import {
    ResultadoActionConDato
} from "../zutils/models";

import * as ZCommon from '../zcommon';
import {
    IZAplState, IZColaEventos
} from "../zcommon/contracts";

import * as ZMenu from '../zmenu';

import * as ZComunicaciones from '../zcomunicaciones';
import { IZMenu } from "../zcommon/contracts";
import { Services } from "./services";
import { ActionTypes } from './actionTypes';

export namespace Actions {

    export const lanzarAplicacion = (idApl: string) => (dispatch: (p: any) => any, getState: () => IZAplState): Promise<ResultadoActionConDato<IZColaEventos>> => {
        return new Promise<ResultadoActionConDato<IZColaEventos>>((resolve, reject) => {
            dispatch(ZComunicaciones.Actions.enviarRequestComando<IZColaEventos>({
                cmd: ZCommon.Constants.ComandoEnum.CM_APLICACION,
                buffer: 'azen',
                idApl: idApl
            }))
                .then(
                (resultadoCmAplicacion: ResultadoActionConDato<IZColaEventos>) => {
                    if (resultadoCmAplicacion.resultado == ZUtils.Constants.ResultadoAccionEnum.ERROR) {
                        reject(resultadoCmAplicacion);
                        return;
                    }
                    dispatch(ZComunicaciones.Actions.enviarRequestComando<Object>({
                        cmd: ZCommon.Constants.ComandoEnum.CM_DEFMENU,
                        buffer: 'azen',
                        idApl: idApl
                    }))
                        .then(
                        (resultadoCmDefMenu: ResultadoActionConDato<IZColaEventos>) => {
                            if (resultadoCmDefMenu.resultado == ZUtils.Constants.ResultadoAccionEnum.ERROR) {
                                reject(resultadoCmDefMenu);
                                return;
                            }
                            Services.Responder.procesarZColaEventos(resultadoCmDefMenu.retorno, dispatch, getState);
                        }
                        );
                },
                () => { }
                );
        });
    }


    export const lanzarOpcion = (ctx: string) => (dispatch: (p: any) => any, getState: () => IZAplState): Promise<ResultadoActionConDato<IZColaEventos>> => {
        return new Promise<ResultadoActionConDato<IZColaEventos>>((resolve, reject) => {
            dispatch(ZComunicaciones.Actions.enviarRequestComando<IZColaEventos>({
                cmd: ZCommon.Constants.ComandoEnum.CM_EJECOPCION,
                buffer: ctx,
                idApl: 'azenctb'
            })).then(
                (resultadoCmEjecOption: ResultadoActionConDato<IZColaEventos>) => {
                    if (resultadoCmEjecOption.resultado == ZUtils.Constants.ResultadoAccionEnum.ERROR) {
                        reject(resultadoCmEjecOption);
                        return;
                    }
                    Services.Responder.procesarZColaEventos(resultadoCmEjecOption.retorno, dispatch, getState);
                }
            )
        });
    }

    export namespace ZAplState {

    }

}