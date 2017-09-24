
//
// Copyright © 2017-present Kary Foundation, Inc. All rights reserved.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace Octobass {

    //
    // ─── INPUT INTERFACE ────────────────────────────────────────────────────────────
    //

        export interface IOctobassSemiActorInfo {
            id:     string
            name:   string
        }

        export interface IInputDataFormat<T> {
            info:           IOctobassSemiActorInfo
            dependencies:   Set<string>
            formula:        T
        }

        export interface IOctobassComputedDependencies<K> {
            [ dependencyId: string ]: K
        }

        export type IExecutionFunction<T, K> =
            ( computedData: IOctobassComputedDependencies<K>,
                     input: IInputDataFormat<T> ) => K

    // ─────────────────────────────────────────────────────────────────

}