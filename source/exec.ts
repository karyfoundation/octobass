
//
// Copyright © 2017-present Kary Foundation, Inc. All rights reserved.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

/// <reference path="./interfaces/user.ts" />

namespace Octobass {

    //
    // ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
    //

        type TExecData<T> = Array<IInputDataFormat<T>>
        type TExecOutput<K> = IOctobassComputedDependencies<K>

        export function exec<T, K> ( data: TExecData<T>,
                                     func: IExecutionFunction<T, K> ): TExecOutput<K> {

            // data
            const computedData: IOctobassComputedDependencies<K> = { }
            let countDownCounter = data.length

            // body
            while ( countDownCounter > 0 )
                for ( const input of data )
                    countDownCounter =
                        tryToCompute( input, computedData, countDownCounter, func )

            // done
            return computedData
        }

    //
    // ─── TRY TO COMPUTE ─────────────────────────────────────────────────────────────
    //

        function tryToCompute<T, K> ( inputData: IInputDataFormat<T>,
                                   computedData: IOctobassComputedDependencies<K>,
                               countDownCounter: number,
                                           func: IExecutionFunction<T, K>) {

            // check if the dependencies are okay
            if ( !isComputable( inputData, computedData ) )
                { return countDownCounter }

            // lets compute
            computedData[ inputData.info.id ] =
                func( computedData, inputData )

            return countDownCounter - 1
        }

    //
    // ─── CHECK IF DEPENDENCIES MEET ─────────────────────────────────────────────────
    //

        function isComputable<T, K> ( inputData: IInputDataFormat<T>,
                                   computedData: IOctobassComputedDependencies<K> ) {

            for ( const id of inputData.dependencies )
                if ( computedData[ id ] === undefined )
                    return false

            return true
        }

    // ────────────────────────────────────────────────────────────────────────────────

}