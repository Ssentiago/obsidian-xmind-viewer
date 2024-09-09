import {
    App,
    MarkdownView,
    TextFileView,
    WorkspaceLeaf,
    FileView,
    TFile,
    IconName,
} from 'obsidian';
import { XMindViewerPlugin } from './x-mind-viewer-plugin';
import { XMindEmbedViewer } from 'xmind-embed-viewer';

const viewType = 'xmind-viewer';

export class XMindViewerView extends FileView {
    plugin: XMindViewerPlugin;
    styles: Partial<CSSStyleDeclaration>;
    constructor(leaf: WorkspaceLeaf, app: App, plugin: XMindViewerPlugin) {
        super(leaf);
        this.app = app;
        this.plugin = plugin;
        this.styles = {
            width: '100%',
            height: '100%',
            border: 'none',
        };
    }

    getViewType(): string {
        return viewType;
    }

    getIcon(): IconName {
        return 'brain';
    }

    getDisplayText(): string {
        if (this.file) {
            return `XMind view: ${this.file.basename}`;
        }
        return 'No file open';
    }

    async onLoadFile(file: TFile): Promise<void> {
        const binary = await this.app.vault.readBinary(file);
        new XMindEmbedViewer({
            el: this.contentEl,
            file: binary,
            region: 'global',
            styles: this.styles,
        });
    }
}
