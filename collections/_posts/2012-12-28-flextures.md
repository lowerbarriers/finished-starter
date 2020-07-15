---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Really wanna twist a phone"
#  image:
#    alt: "Default social image" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
#  robots: "index,follow"
#  title: "Overrides the tab title and social titles"
#permalink: /blog/post-title/
#published: true
#sitemap: true
tags: ["Technology"]
title: "Flextures"
---

[Flexible phones are coming soon](http://www.bbc.co.uk/news/technology-20526577). At first this could just mean phones will
be more comfortable in your pocket and less prone to shattering, but eventually this is bound to serve a practical purpose.

I believe the ability to flex is an [affordance](http://en.wikipedia.org/wiki/Affordance). In the same way that touchscreen
gestures and device orientation-detection have become UI standards, device torsion will enable new ways to interact with
a device.

### Device Realities

While flexible displays are a reality, many other device components won't be practically bendy in the near future. This
leads to two primary design decisions:

#### Rigid + Flexy

In this model, shown by prototypes at trade shows, one edge of the device is a solid housing for non-flexible components.
The screen emerges from this edge, being the only flexy part of the device. I see this going two ways:

  * A rounded base with the screen rolling around it for storage, making a "scroll" when not in use
  * Some other, terrible design

#### Semi-flexy

In this model, the non-flexible components are spaced out underneath the screen somewhat-evenly, and the device's chassis
limits the amount of flex in order to prevent the non-flexible components from being damaged. This leads to a device that
can bend, but not one you can roll up or crumple.

This is the overwhelmingly better idea. It will be especially practical if the battery (the most volume and mass inside
any given device) can be made flexible. A semi-bendy device still allows for flextures and may be more resistant to damage,
while remaining a familiar and useful form factor

### Flexture Types

The variety and complexity of flextures depends on the operating flexible range of a device. Early semi-flexy devices may
only have crude flexture support.

All the flexture types below can be toggled either way; bending either toward or away from the user. Where my imagination
allows, I speculate on common uses for each flexture.

#### Vertical Bend

If a user bends the device "hamburger style" (assuming a phone form factor that's taller than it is wide when held the
usual way) toward themselves, this might perhaps trigger the iOS notification pane — or other tasks that might use a top
edge swipe nowadays. Maybe this could become a flexture similar to the "pull-to-refresh" pattern.

There are at least two ways to accomplish a vertical inward bend, each with its own caveats:

  1. Thumb pressing the center of the screen, index finger pushing the top of the back and pinky pushing the bottom
  2. One hand grabs the top of the device, the other grabs the other

The first method involves touching the screen, which might interfere with tapping gestures. The second method requires
two hands. Neither of these are show-stoppers necessarily (pinch-to-zoom requires two hands), but they're an indication
of the care required to implement successful flextures.

The user can also bend the device away from themselves hamburger style. This would almost certainly require two hands. I
could see this as an alternative method to close an app, triggering a split vertical wipe animation from the center of the
screen.

#### Horizontal Bend

A horizontal bend inwards, especially one biased slightly to the lower end of the device, could be the most-used of all
the flextures. It's just how you naturally hold the device, so activating this flexture is faster and more natural than
even hitting a button or tapping the screen.

For this reason, it's important that this be the most-standardized flexture for handheld devices. It should do something
useful and significant, but not distracting in the case of false positives.

I think this flexture should toggle an app's fly-out menu or navigate OS panes. By design standards, apps and sites will
tend toward menus that wipe in from the side. It should be encouraged by OS makers that menus be fairly static and cached
in memory, allowing them to fly in and out quickly.

A horizontal bend outward might be rare. It really depends on the bezel, use case, etc. Bending different directions likely
won't indicate on-screen directionality, since bending one way is substantially more tough than bending the other.

#### Corner-to-corner Twist

If you pinch the top-left corner (with your left hand) and the bottom-right corner and twist your hands in opposite directions,
it will increment/decrement the contextually-approriate volume slider. Turning your right hand left (and left hand right)
will turn down the volume. Turning it right will crank up the volume.

If you pinch the opposite corners and perform a twist, it slides the device brightness. The increase-decrease motion is
always indicated by the bottom corner in a righty-tighty-lefty-loosie fashion.

#### Individual Corner Bends

Bending individual corners could also trigger certain actions. One cool action would be bending the corner opposite the
camera, thereby taking a picture. It's cool because not only does it make taking a picture more convenient, but it also
prevents your hand from getting in the way of the lens.

### Games

Up to this point I've talked about flextures from a conventional UI perspective. A pinch gesture does roughly the same
thing in most apps by convention, for instance, so it's reasonable to believe there will be conventional flextures. This
isn't necessarily what happens in games, though…

We've seen some pretty cool games that use device orientation: to steer a car or to orient a player in a 3d world. Flextures
can extend these movements and allow for more dimensional movements or even distortion of the virtual worlds. I'm pretty
excited about this aspect.

### Torsion Detection

Along with having the ability to flex, a device that uses flextures would also need a sensor to detect the direction(s)
and intensity of the flexing that occurs. Not being an engineer, I have no idea what this would entail. But I assume it's
something that can be done with current technology for the most part.

I believe torsion detection is a practical necessity for devices. If the device's gyro is flexed one way, but the rest of
the device is oriented another, the software may orient the screen the wrong direction. The same reasoning also has
implications for compasses and other internals. Only by having the software be aware of flexing activity can the user
experience not be negatively affected. The potential problem is dependent on the physical locations of sensors in the
device, as well as by the overall device size.

### tl;dr

It would be pretty cool if flexing your phone different ways was a type of gesture.
