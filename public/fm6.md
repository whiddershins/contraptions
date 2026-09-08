# FM / 6

Six operators. Two keyboards. A sound you can take apart.

A six-operator synthesizer by Sarth Calhoun. Start with a bell, a bass or a slowly moving chord. Change the operators and hear how the sound is made.

Play: https://contraptions.bookofsarth.com/fm6/
Creator: https://sarth.net
Hosted on Cloudflare Workers. Published 2026-09-08.

## How to play

### Start with a sound

Choose Glass garden for a bell, Rubber bass for a pluck, or Slow orbit for a slowly moving tone. Enable audio, then play the on-screen keys or A–K on your computer keyboard. Start with your listening volume low.

### Follow the carrier

A carrier adds directly to the sound you hear. Raise its Level to bring that layer forward. A modulator changes another operator’s tone: raise its Level for more brightness or grit. The routing diagram shows which is which.

### Give the sound a shape

Lengthen Attack for a softer entrance. Lengthen Decay for a longer ring. Raise Sustain to keep more tone while a key is held; lengthen Release for a gentler ending. A modulator’s envelope moves the brightness through the note.

### Try a bend or a darker edge

Turn on an operator’s Pitch envelope for a pitch sweep. Choose a low-pass filter and lower Cutoff to soften its high end. The technical explanation and Try line on each operator follow the current controls.

### Let a chord keep going

Turn on either keyboard’s Sustain latch, then tap a few notes. Tap a lit note again to release just that note. Add a few cents of detune on the second keyboard for beating between equal pitches. Stop all clears both keyboards.

### Keep the patch

Save patch… opens a naming dialog. A new name makes a new entry; Replace saved patch explicitly updates an existing one. Export JSON keeps a file you can load in another browser or device. Render & listen plays the same phrase for comparisons and offers a WAV download.

## Why

To make the relationships inside a sound playable and understandable. Each operator explains its role in the current patch and suggests a useful change to try.

## Features

- Six operators, each with sine, triangle, saw, square or noise, tuning and a delay–attack–hold–decay–sustain–release envelope.
- Four FM routings, optional pitch envelopes and filters for each operator, plus a shared pitch envelope and output filter.
- One LFO with four assignable routes, and reverb for a shared sense of space.
- Two touch keyboards with separate octave, detune and sustain latches. Drag to glide; tap a latched note again to release it.
- MIDI and MPE input in supporting browsers, including independent pitch bend, pressure and timbre.
- Ten starting patches, editable operator notes, named saves, JSON import/export and a repeatable five-second WAV audition.

## Privacy and saved patches

Sound synthesis, playing and audition rendering happen in your browser. Saved patches stay in this browser on this site. No account, microphone access or model calls are needed. JSON export makes a portable copy.

Saved patches do not automatically transfer between sites. Export JSON on the first site and Load patch here.

## Context

- [Contraptions](https://contraptions.bookofsarth.com/): Sarth Calhoun’s shelf of small machines.
- [Soundscape One](https://contraptions.bookofsarth.com/soundscape-one): Another browser instrument by Sarth: position changes the mix there; operator relationships shape the tone here.
- [WebAssembly](https://webassembly.org/): Runs the C++ sound engine in the browser.
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API): An AudioWorklet plays the engine; a separate instance renders repeatable auditions.
- [Codex](https://openai.com/codex/): Implementation assistance, guided by Sarth’s sound-design and interaction choices.

## Source

Private repository: https://github.com/whiddershins/agent-synth-magic
Revision: 25724c774cf99630df162866e8718bba9d76af09
Release record: https://contraptions.bookofsarth.com/fm6.json
