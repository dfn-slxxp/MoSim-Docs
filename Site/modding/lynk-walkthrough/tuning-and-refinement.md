---
sidebar_position: 7
---

# Tuning and Refinement

In your setpoint folder on the bottom you can adjust setpoints until things are at the right height. 

You may however notice nothing will score since we didn't set any force on the game piece when released.

Going into `PlacePiece` and changing them to this fixes the issue:

![Set Game Piece Force](@site/static/img/lynk/placepiecemaxspeedcode.png)

:::note

l4 on fixed outtake bots is jank. It requires a VERY arbitrary back space to work. It also uses the ContinuedForce variant of release which has a time to apply force and a maximum speed at which it should apply the fixed force value.

:::

You may find a couple bugs while doing it, we will cover the game piece inconsistencies in a moment but first:

Algae intake needs moved,

![Algae Intake](@site/static/img/lynk/algaeintake.png)

Front bar was made capsule

![Front Bar](@site/static/img/lynk/algaebar.png)

PlacePiece needs to be modified to check for algae **not** robot mode.

![Not Robot Mode](@site/static/img/lynk/placepiecehaspiececode.png)

Top colliders on EE were removed

![Remove Top EE Colliders](@site/static/img/lynk/coralshafts.png)

All Generic Joints needed to ignore the robot layer (drift causer)

![Ignore Robot Layer](@site/static/img/lynk/rigidbodyandjoint.png)

My final setpoints:

```
Barge prep: 20
Barge Score: 60
High Algae: 34
Intake: 0
L1: 0 (we will worry about that later)
L2: 16
L3: 32
l4 : 55.5
l4Place: 59
LowAlgae: 17
Stow: 0
```

To make l4 consistent we need auto-align.

Add `Reefscape Auto Align` to 9496 and fill it out.

![Fill Out Auto Align](@site/static/img/lynk/autoalignoffset.png)

That helped but it's still bad. So

![Set Material to Grip](@site/static/img/lynk/hingejoint.png)

![Adjust Algae Pivot Collider](@site/static/img/lynk/algaepivot.png)

![Select Empty Child of Stage 2](@site/static/img/lynk/stage2gameobject.png)

Also tell `AlgaeArm` to ignore coral

![Exclude Coral Layer](@site/static/img/lynk/rigidbody.png)

Then the front bar as well

![Update Front Bar](@site/static/img/lynk/nofricbounce.png)

Auto align also doesn't settle well so

![Update Drive PIDs](@site/static/img/lynk/drivepid.png)

Now we can fix some other things

![Fix Intake Setpoint](@site/static/img/lynk/intakesetpointcode.png)

![Fix Some Other Setpoints](@site/static/img/lynk/setpointcode.png)

![Adjust Coral Roller](@site/static/img/lynk/coralguide.png)

![Tune Drop Strength](@site/static/img/lynk/dropstrength.png)

Adjust coral intake

![Set Speed and Force](@site/static/img/lynk/linearforce.png)

Make `FunnelPivot` and `Game Object` 2lbs