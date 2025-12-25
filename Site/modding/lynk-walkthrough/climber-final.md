---
sidebar_position: 8
---

# Climber and Final Setup

## Climber

Disable automatic tensor on the bar and the flap.

![Disable Automatic Tensor](@site/static/img/lynk/autotensor.png)

Setup the setpoints

![Create Climb Setpoints](@site/static/img/lynk/climbcode.png)

Now back to the prefab add a box set to trigger on the bar

![Setup Climb Trigger](@site/static/img/lynk/climbcol.png)

Add a climb scorer on 9496 and add said box to the cage scoring trigger

![Set Up Climb Scorer](@site/static/img/lynk/climbscorecol.png)

You now have a working climber.

Repeat what we did for l4 for l1

## Final Setup

Here's an only slightly cooked version of their logo

![Use This Logo for the Mod](@site/static/img/lynk/lynklogo.png)

Download and drag it into the 9496 folder. Then click it and set settings to

![Configure Graphic](@site/static/img/lynk/textureimport.png)

Then set it to the logo

Copy the root of 9496, open the main menu prefab, delete all children and paste. Remove all components from the root and then remove all components from joints and intakes (colliders excluded)

You can also fill out the tutorial cards now.