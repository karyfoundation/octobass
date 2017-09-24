
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

    const fs = require('fs')
    const path = require('path')

//
// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
//

    const appendingSourceCode = [
        "if (process.cwd && __dirname && module.exports) {",
        "   module.exports = Octobass;",
        "} else if (window) {",
        "   window.Octobass = Octobass;",
        "}",
    ].join('\n')

    const sourceFilePath = path.resolve( __dirname + '/../bin/octobass.js' )

//
// ─── APPENDING THE SYSTEM CHECK TO THE SOURCE FILE ──────────────────────────────
//

    const sourceCodeString =
        fs.readFileSync( sourceFilePath, 'utf8' )

    const appendedSourceFile =
        sourceCodeString + "\n\n" + appendingSourceCode

    fs.writeFileSync( sourceFilePath, appendedSourceFile )

// ────────────────────────────────────────────────────────────────────────────────
