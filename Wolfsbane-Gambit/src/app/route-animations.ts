import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations'

// Basic

export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateX(100%)',
                }),
            ],{optional:true}),
            query(':enter', [
                animate('1000ms ease',
                    style({ opacity: 1, transform: 'scale(1) translateX(0)' })
                ),
            ],{optional:true}),
            query(':leave', [
                animate('1000ms ease',
                    style({ opacity: 1, transform: 'scale(0) translateX(100%)' })
                ),
            ],{optional:true})
        ]),
    ]);