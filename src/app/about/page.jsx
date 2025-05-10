"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "@/components/editor/ToolbarPlugin";
import { useState } from "react";
import { $getRoot, $createParagraphNode, $createTextNode } from "lexical";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

const initialText = `Our Story

At Sparedoc, we're transforming the way you shop for car parts. As a trusted e-commerce platform, we offer a wide selection of genuine and aftermarket auto components, accessories, and tools. Whether you're a car owner, garage professional, or enthusiast, we make it easy to find everything your vehicle needs — quickly, reliably, and all in one place.
`;

const editorConfig = {
    theme: {
        paragraph: "editor-paragraph",
    },
    onError(error) {
        throw error;
    },
    nodes: [
        ListNode,
        ListItemNode,
        HeadingNode,
        QuoteNode,
    ],
    editorState: () => {
        const root = $getRoot();
        const paragraph = $createParagraphNode();
        paragraph.append($createTextNode(initialText));
        root.append(paragraph);
    },
};

const About = () => {
    const [content, setContent] = useState(initialText);

    const handleChange = (editorState) => {
        editorState.read(() => {
            const root = $getRoot();
            setContent(root.getTextContent());
        });
    };

    const handleSave = () => {
        console.log("Saved content:", content);
    };

    return (
        <div className="space-y-4 text-[#333333] m-5 overflow-auto scrl-hide">
            <div className="bg-white p-5 h-[85vh] flex flex-col justify-between">
                <div className="flex flex-col justify-between gap-6 ">
                    <div>
                        <h2 className="text-xl font-medium text-gray-800">About Us</h2>
                        <LexicalComposer initialConfig={editorConfig}>
                            <ToolbarPlugin />
                            <RichTextPlugin
                                contentEditable={<ContentEditable className="min-h-[300px] rounded-md outline-none" />}
                                placeholder=""
                                ErrorBoundary={LexicalErrorBoundary}
                            />
                            <HistoryPlugin />
                            <ListPlugin />
                            <AutoFocusPlugin />
                            <OnChangePlugin onChange={handleChange} />
                        </LexicalComposer>
                    </div>


                </div>
                <div className="flex justify-center">
                    <button onClick={handleSave} className="px-6 py-2 bg-button text-white rounded-xs hover:bg-button-hover transition cursor-pointer">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
