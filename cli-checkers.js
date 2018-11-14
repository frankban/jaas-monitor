// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';

class MachineCounter {
  constructor() {
    this.count = 0;
    this.check = this.check.bind(this);
  }

  async check(connect, status, ui) {
    this.count += Object.keys(status.machines).length;
  }
}

module.exports = {
  MachineCounter
};
