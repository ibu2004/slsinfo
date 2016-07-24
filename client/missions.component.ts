import { Component } from '@angular/core';
@Component({
    template: `
  <div id="main">
    <p>The list below includes only confirmed missions.</p>
  </div>
  <div id="secondaryassets">
    <div id="exinfo">
      <table>
        <tr>
          <th>Mission</th>
          <th>Acronym</th>
          <th>Vehicle</th>
          <th>Manned</th>
          <th>Launch date</th>
          <th>Status</th>
          <th>Duration</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>Exploration Mission 1</td>
          <td>EM-1</td>
          <td>SLS Block I</td>
          <td style="background: #F99;">No</td>
          <td>By November 2018</td>
          <td style="background: #DDFBFF;">Planned</td>
          <td></td>
          <td>Send unmanned Orion capsule on trip around the Moon, deploy Near-Earth Asteroid Scout, Lunar Flashlight, BioSentinel, SkyFire, Lunar IceCube and 6 other small CubeSats.</td>
        </tr>
        <tr>
          <td>Europa Multiple-Flyby Mission</td>
          <td>EMFM</td>
          <td>SLS Block IB</td>
          <td style="background: #F99;">No</td>
          <td>2022-2025</td>
          <td style="background: #DDFBFF;">Planned</td>
          <td></td>
          <td>Send a Europa probe (Europa Clipper) and a lander to Jupiter. Congress has mandated this flight to launch by 2022. This flight will also test the new upper stage, as required per NASA rules for human rating.</td>
        </tr>
        <tr>
          <td>Exploration Mission 2</td>
          <td>EM-2</td>
          <td>SLS Block IB</td>
          <td style="background: #9F9;">Yes</td>
          <td>2021-2023</td>
          <td style="background: #DDFBFF">Planned</td>
          <td></td>
          <td>Send an Orion capsule with four crew members into a lunar orbit.</td>
        </tr>
        <tr>
          <td>Asteroid Crewed Redirect Mission</td>
          <td>ACRM</td>
          <td>SLS Block IB</td>
          <td style="background: #9F9;">Yes</td>
          <td>2026</td>
          <td style="background: #DDFBFF;">Planned</td>
          <td></td>
          <td>Send an Orion capsule in 2026 with four crew members to an asteroid that had been robotically captured and placed in lunar orbit in late 2025 (Asteroid Redirect Mission).</td>
        </tr>
      </table>
    </div>
  </div>`
})
export class MissionsComponent { }