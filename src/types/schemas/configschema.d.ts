/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Configschema {
	useTestData: boolean;
	event: {
		theme?: string;
		shorts: string | [string] | [string, string];
		thisEvent: number;
		online: boolean | ('partial' | 'full');
	};
	omnibar: {
		miniCredits: {
			header: string;
			screeners?: string;
			tech?: string;
		};
	};
	streamdeck: {
		enabled: boolean;
		port: number;
		key: string;
		debug: boolean;
	};
	rabbitmq: {
		enabled: boolean;
		protocol: string;
		hostname: string;
		username: string;
		password: string;
		vhost: string;
		queuePrepend?: string;
	};
	obs: {
		enabled: boolean;
		address: string;
		password: string;
		canvasResolution: {
			width: number;
			height: number;
		};
		names: {
			scenes: {
				commercials: string;
				gameLayout: string;
				readerIntroduction: string;
				intermission: string;
				intermissionPlayer: string;
				countdown: string;
			};
			sources: {
				gameSources: string | [string, ...string[]];
				cameraSources: string | [string, ...string[]];
				cameraSourceCrowd?: string | null;
				twitchSources: string | [string] | [string, string];
				videoPlayer: string;
				donationSound: string;
			};
			groups: {
				gameCaptures: string | [string, ...string[]];
				cameraCaptures: string | [string, ...string[]];
			};
		};
	};
	music: {
		enabled: boolean;
		address: string;
		username: string;
		password: string;
	};
	x32: {
		enabled: boolean;
		ip: string;
		localPort: number;
	};
	xkeys: {
		enabled: boolean;
	};
	tracker: {
		enabled: boolean;
		address: string;
		username: string;
		password: string;
	};
	tts: {
		enabled: boolean;
		voiceAPI: string;
	};
	flagcarrier: {
		enabled: boolean;
		allowedDevices?: string | [string, ...string[]] | null;
		group: string;
	};
	offsite: {
		enabled: boolean;
		address: string;
		key: string;
	};
}
