import { ServiceProto } from '../../src/proto';
import { ReqTest, ResTest } from './PtlTest'

export interface ServiceType {
    api: {
        "Test": {
            req: ReqTest,
            res: ResTest
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "services": [
        {
            "id": 0,
            "name": "Test",
            "type": "api"
        }
    ],
    "types": {
        "PtlTest/ReqTest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "a",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "b",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "c",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "d",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    },
                    "optional": true
                }
            ]
        },
        "PtlTest/ResTest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "a",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "b",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "c",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "d",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    },
                    "optional": true
                }
            ]
        }
    }
};