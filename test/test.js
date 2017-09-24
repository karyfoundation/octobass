
//
// Copyright © 2017-present Kary Foundation, Inc. All rights reserved.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    const Octoboss = require('./../bin/octobass.js')

//
// ─── TEST DATA ──────────────────────────────────────────────────────────────────
//

    const data =
        [{
            info: { id: "a", name: "name" },
            dependencies: new Set( ),
            formula: 1
        },{
            info: { id: "b", name: "name" },
            dependencies: new Set( ),
            formula: 3
        },{
            info: { id: "c", name: "name" },
            dependencies: new Set( ),
            formula: 5
        },{
            info: { id: "x", name: "name" },
            dependencies: new Set(['a', 'b']),
            formula: null
        }, {
            info: { id: "y", name: "name" },
            dependencies: new Set(['x', 'c']),
            formula: null
        }]


    function func ( computed, input ) {
        if ( input.dependencies.size === 0 )
            return input.formula

        let sum = 0
        for ( const key of input.dependencies )
            sum += computed[ key ]
        return sum
    }

//
// ─── TEST DRIVE ─────────────────────────────────────────────────────────────────
//

    const results = Octoboss.exec( data, func )

    console.log( results )

// ────────────────────────────────────────────────────────────────────────────────
