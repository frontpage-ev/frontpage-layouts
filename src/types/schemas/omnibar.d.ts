/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Omnibar {
	rotation: {
		type: 'GenericMsg' | 'UpcomingRun' | 'Prize' | 'Bid' | 'Milestone';
		id: string;
		props?: Props;
	}[];
	alertQueue: {
		type: 'Tweet' | 'CrowdControl' | 'MiniCredits';
		id: string;
		data?: {
			[k: string]: unknown;
		};
	}[];
	current: {
		type: ('GenericMsg' | 'UpcomingRun' | 'Prize' | 'Bid' | 'Milestone') | ('Tweet' | 'CrowdControl' | 'MiniCredits');
		id: string;
		props?: Props;
	} | null;
	lastId?: string;
	pin: {
		type: 'Bid' | 'Milestone';
		id: string | number;
	} | null;
	miniCredits: {
		runSubs: {
			[k: string]: unknown;
		}[];
		runCheers: {
			message: {
				/**
				 * The message text.
				 */
				trailing: string;
				/**
				 * This object represents a deserialized Twitch IRC message. Only properties that we use are listed here.
				 */
				tags: {
					/**
					 * The display name of the user who cheered.
					 */
					'display-name': string;
					/**
					 * The amount of bits cheered by the user.
					 */
					bits: string;
					[k: string]: unknown;
				};
			};
		}[];
		runDonations: {
			/**
			 * Shorthand event string this donation is for.
			 */
			event: string;
			/**
			 * Unique donation ID from the database.
			 */
			_id: number;
			/**
			 * The name of the donor that they would like to appear as publicly (can be "(Anonymous)").
			 */
			donor_visiblename: string;
			/**
			 * The amount this donation is for. Currency isn't specified but is (currently) USD.
			 */
			amount: number;
			/**
			 * If the donation comment was accepted/rejected. Should be APPROVED or DENIED, rarely could be something else if something server side messes up; treat anything that isn't APPROVED as if it was DENIED.
			 */
			comment_state: 'ABSENT' | 'PENDING' | 'DENIED' | 'APPROVED' | 'FLAGGED';
			/**
			 * Donator's comment. Can be blank; is made blank if their comment was rejected.
			 */
			comment: string;
			/**
			 * Timestamp of when the donation was received.
			 */
			time_received: string;
		}[];
	};
}
export interface Props {
	seconds?: number;
	[k: string]: unknown;
}