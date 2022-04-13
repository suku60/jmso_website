import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';

const characters = `01`;
const stringMutationOdds = 50;

const beamMinSize = 2;
const beamMaxSize = characters.length;

const intervalMinDelay = 66;
const intervalMaxDelay = 200;

const delayMinBetweenBeams = 6;
const delayMaxBetweenBeams = 6666;

const randomInRange = (min, max) =>
	Math.floor(Math.random() * (max - min)) + min;

const randomCharacter = () =>
	characters.charAt(Math.floor(Math.random() * characters.length));

const randomBeam = () =>
	new Array(randomInRange(beamMinSize, beamMaxSize))
		.fill()
		.map(_ => randomCharacter());

const getMutatedBeam = beam => {
	const newBeam = [];
	for (let i = 1; i < beam.length; i++) {
		if (Math.random() < stringMutationOdds) {
			newBeam.push(randomCharacter());
		} else {
			newBeam.push(beam[i]);
		}
	}
	newBeam.push(randomCharacter());
	return newBeam;
};

const BeamFall = props => {
	const [beam, setBeam] = useState(randomBeam());
	const [paddingTop, setTopPadding] = useState(beam.length * -50 * randomBeam.length);
	const [intervalDelay, setIntervalDelay] = useState(null);

	// Initialize intervalDelay
	useEffect(() => {
		setTimeout(() => {
			setIntervalDelay(randomInRange(intervalMinDelay, intervalMaxDelay));
		}, randomInRange(delayMinBetweenBeams, delayMaxBetweenBeams));
	}, []);

	useInterval(() => {
		if (!props.height) {
            return;
        }

		if (!intervalDelay) {
            return;
        }

		if (paddingTop > props.height) {
			setBeam([]);
			const newBeam = randomBeam();
			setBeam(newBeam);
			setTopPadding(newBeam.length * -44);
			setIntervalDelay(null);
			setTimeout(
				() =>
					setIntervalDelay(
						randomInRange(intervalMinDelay, intervalMaxDelay),
					),
				randomInRange(delayMinBetweenBeams, delayMaxBetweenBeams),
			);
		} else {
			setTopPadding(paddingTop + 20);
		}
		// setBeam(beam => [...beam.slice(1, beam.length), randomCharacter()]);
		setBeam(getMutatedBeam);
	}, intervalDelay);

	return (
		<div className='text_matrix' id="animation"
			style={{
                transition: '1s',
				writingMode: 'sideways-rl',
				color: '#20c20e',
				textOrientation: 'sideways',
				userSelect: 'none',
				whiteSpace: 'nowrap',
				marginTop: paddingTop,
				marginLeft: -9,
				marginRight: -9,
				textShadow: '0px 0px 8px rgba(255, 255, 255, 0.4)',
				fontSize: 44,
			}}>
			{beam.map((char, index) => (
				<a
					style={{
						marginTop: -29,
						opacity: index < 6 ? 0.1 + index * 0.15 : 1,
						color: index === beam.length - 1 ? 'red' : undefined,
						textShadow:
							index === beam.length - 1
								? '0px 0px 20px rgba(255, 255, 255, 1)'
								: undefined,
					}}>
					{char}
				</a>
			))}
		</div>
	);
};

const Background = props => {
	const containerRef = useRef(null);
	const [containerSize, setContainerSize] = useState(null);

	useEffect(() => {
		const boundingClientRect = containerRef.current.getBoundingClientRect();
		setContainerSize({
			width: boundingClientRect.width,
			height: boundingClientRect.height,
		});
	}, []);

	const beamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

	return (
		<div id="animation"
			style={{
				background: 'black',
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: 'ignore',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
			}}
			ref={containerRef}>
			{new Array(beamCount).fill().map(_ => (
				<BeamFall height={containerSize?.height} />
			))}
		</div>
	);
};

export default Background;