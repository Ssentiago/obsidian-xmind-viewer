import { Plugin } from 'obsidian';
import { XMindViewerView } from './x-mind-viewer-view';
import { XMIND_VIEW_TYPE } from '../typing/types';

export class XMindViewerPlugin extends Plugin {
    /**
     * Called when the plugin is loaded.
     *
     * Registers the view that will show when an XMind file is opened.
     * Also registers the extensions that will trigger the view.
     */
    onload(): void {
        this.registerView(
            XMIND_VIEW_TYPE,
            (leaf) => new XMindViewerView(leaf, this.app, this)
        );

        this.registerExtensions(['xmind'], XMIND_VIEW_TYPE);
    }
}
