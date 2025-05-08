# frozen_string_literal: true

module Rouge
  module Lexers
    class GML < RegexLexer
      title "GML"
      desc "GameMaker Language"
      tag 'gml'
      filenames '*.gml'

      def self.keywords
        @keywords ||= Set.new %w(
          if else for while do break continue return var function switch case default with global repeat enum
        )
      end

      def self.builtins
        @builtins ||= Set.new %w(
          draw_text draw_sprite draw_sprite_ext instance_create_layer instance_destroy
          matrix_set matrix_build matrix_build_identity
          vertex_create_buffer vertex_begin vertex_end vertex_submit
          vertex_position_3d vertex_normal vertex_texcoord vertex_color
          string clamp rollover floor ceil round length
        )
      end

      state :root do
        rule %r/\s+/, Text::Whitespace

        # Single-line comments
        rule %r(//.*?$), Comment::Single

        # Strings
        rule %r/"/, Str::Double, :string

        # Numbers
        rule %r/\d+\.\d+/, Num::Float
        rule %r/\d+/, Num::Integer

        # Operators & punctuation
        rule %r/[+\-*\/=<>!&|%^~]+/, Operator
        rule %r/[()\[\]{}.,;:]/, Punctuation

        # Identifiers (keywords, built-ins, names)
        rule %r/[a-zA-Z_][\w]*/ do |m|
          name = m[0]
          if self.class.keywords.include? name
            token Keyword
          elsif self.class.builtins.include? name
            token Name::Builtin
          else
            token Name
          end
        end
      end

      state :string do
        rule %r/[^\\"]+/, Str::Double
        rule %r/\\./, Str::Escape
        rule %r/"/, Str::Double, :pop!
      end
    end
  end
end
