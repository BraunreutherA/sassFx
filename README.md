# sassFx

sassfx is a simple library for hover and click effects, based on the work of https://github.com/crnacura

For examples see http://tympanus.net/Development/IconHoverEffects/


The library is built on sass mixins so you can use which effect you want and just include the mixin for it.
As long as you don't include the mixins your css code won't get any longer!

## Intsallation
Soon @ bower

## Usage
create a class for your effect and just include a mixin for it.

    .my-effect {
      @include hover-icon-1(45px, fff, fff, 000);
      @include hover-icon-1--active(45px, fff, fff, 000);
    }

    hover-icon-<number of effect>(innerIconSize, iconColor, secondaryColor, iconHoverColor)

To make it correctly working you need autoprefixer running over your css file!

## Attention WIP!
This library is actually work in progress. So take care if you want to use it yet.
If you have suggestions based on the building of the mixins your invited to contribute.
